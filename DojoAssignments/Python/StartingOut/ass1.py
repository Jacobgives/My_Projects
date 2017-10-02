#
words ="It's thanksgiving day. It's my birthday,too!"
print(words.find("day"), words.replace("day", "month"))
#
x = [2,54,-2,7,12,98]
print(min(x), max(x))
#
x = ["hello",2,54,-2,7,12,98,"world"]
print(x[0],x[-1])
#
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x = sorted(x)
y = x[((len(x)-1)//2):]
print(y ,': y')
z = x[:((len(x)-1)//2)]
print(z)
y.insert(0, z)
print(y)
