word_list = ['hello','world','my','name','is','Anna']
char = 'A'
add = 0
for i in range(0, len(word_list)):
  for j in range(0, len(word_list[i])):
    print(j)
    if word_list[i][j] == char:
      add +=1
print(add)
#will count capitals and lowercase letters seperately.
