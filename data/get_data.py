import requests
import json
r = requests.get("https://thenetmonitor.org/v2/countries")
print ("successfully got response!")

#JSONify since the API call is super slow
r = r.json()
print("JSONING!!!")
print(r)

#save the data into a JSON file
with open('data.json', 'w') as outfile:
    json.dump(r, outfile, ensure_ascii=False)



