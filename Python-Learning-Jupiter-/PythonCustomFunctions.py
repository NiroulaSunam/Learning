#!/usr/bin/env python
# coding: utf-8

# In[4]:


def CheckIfNotNumeric(*args):
    for x in args:
        if not(isinstance(x,(int,float))):
            return False
    return True


# In[5]:


def AddAllNumnerics(*args):
    sum = 0
    for x in args:
        sum += x
    return sum


# In[ ]:

b = 'functions lounge'
print("functions lounge")

