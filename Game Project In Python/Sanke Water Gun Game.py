import random

def gamewin(comp,you):
    if comp == you:
        return None
    elif comp == 's':
        if you == 'w':
            return False
        elif you == 'g':
            return True
    elif comp =='w':
        if you =='g':
            return False
        elif you =='s':
            return True
    elif comp == 'g':
        if you == 's':
            return False
        elif you =='w':
            return True

print("comp Turn: Sanke(s) water(w) or Gun(g)?")
randNo = random.randint(1,3)
if randNo == 1:
    comp = 's'
elif randNo == 2:
    comp = 'w'
elif randNo == 3:
    comp = 'g'

you = input("Your Turn: snake(s) water(W) or Gun(g)?")
a = gamewin(comp,you)

print(f"computer chose {comp}")
print(f"You Chose {you}")

if a == None:
    print("The game is a tie!")
elif a:
    ("You win!")
else :
    print("you Lose")


