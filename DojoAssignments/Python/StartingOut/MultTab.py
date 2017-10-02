string = ''
print(" x 1 2 3 4 5 6 7 8 9 10 11 12")
for i in range(1,13):
  string =str(i)
  for j in range(1, 13):
    string += ' '+str(i*j)
  print(string)
