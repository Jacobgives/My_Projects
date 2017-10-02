l = [1,2,3,4,5,'y',1,1]
sum = 0
list = ''
bn = 0
bs = 0
for i in range(0, len(l)):
  if type(l[i]) is int:
    sum += l[i]
    bn = 1
  if type(l[i]) is str:
    list += l[i]
    bs = 1
if bn & bs:
  print('mixed data.', 'sum = ', sum, 'list = ', list)
elif bn:
  print('ints only', 'sum = ', sum,)
elif bs:
  print('strings only', 'list = ', list)
else:
  print('adverse scenario')
