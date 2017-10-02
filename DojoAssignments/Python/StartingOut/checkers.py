for i in range(0,8):
  string =''
  for j in range(0,8):
    if((i+j)%2) ==0:
      string +='*'
    else:
      string +=' '
  print(string)
  
