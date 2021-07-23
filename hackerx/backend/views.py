from django.shortcuts import render
from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.http import  JsonResponse
from django.views.decorators.csrf import csrf_exempt
import joblib

@csrf_exempt
def func2(request):
   if(request.method=="POST"):
      a = request.body
      s = a.decode('UTF-8')
      cld = joblib.load('svd_final.sav')
      pred = []
      products = ['Mutual Funds', 'Home Loan', 'Asset Care', 'Home Insurance', 'Personal Loan', 'Credit Card',
                  'Demat Account', 'Health insurance', '2&3 Wheeler Loan', 'EMI NETWORK Card']
      for prod in products:
         anss = cld.predict(s, prod)
         # print(anss.iid)
         # print(anss.est)
         dict = {'name': anss.iid, 'est': anss.est}
         pred.append(dict)
      result = sorted(pred, key=lambda k: k['est'], reverse=True)
      # print(result)
      tosend = []
      for i in range(0, 6):
         tosend.append(result[i])
      print(tosend)
      return JsonResponse({"resp":tosend})


@csrf_exempt
def func1(request):
    #return HttpResponse("You are on django field")
        if(request.method=="POST"):
           print(request.body)
           cls = joblib.load('df_final (1).sav')
           list = []
           print(cls)
           cust_name = 'A1'
           scheme = 'Home Loan'
           ans1 = cls.predict(cust_name,scheme)
           ans2 = cls.predict(cust_name,'Motor Insurance')
           ans3 = cls.predict(cust_name,'Credit Card')
           ans4 = cls.predict(cust_name,'Mutual Funds')
           ans5 = cls.predict(cust_name,'Health Insurance')
           ans6 = cls.predict(cust_name,'Home Insurance')
           list.append(ans1)
           list.append(ans2)
           list.append(ans3)
           list.append(ans4)
           list.append(ans5)
           list.append(ans6)
           print(list)
           return JsonResponse({'response':list})







