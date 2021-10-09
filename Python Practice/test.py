import numpy as np
import random as random
import matplotlib.pyplot as plt
import seaborn as sns
sns.set()

def move2D(xi,yi):
    '''
    This function choose a direction and walk one step in 2D
    '''

    xf =0, yf =0
    direction = random.choice(['x','y'])
    if direction == 'x':
        r = random.choice([-1,1])
        if r == 1:xf = xi+1
        else: xf = xi -1
        yf = yi
    if direction == 'y':
        r = random.choice([-1,1])
        if r == 1:yf = yi+1
        else: yf = yi -1
        xf = xi
    return xf,yf


def walk2D(N,pos):
    '''
    This function walks N steps in 2d implementing move2D
    '''
    
    X =[] ; Y =[]
    
    x0 = pos[0] ; y0 = pos[0]
    
    k =0
    while k < N:
        '''move a step'''
        x,y = move2D(x0,y0)
        
        'collect X coordinate'
        X.append(x)
        
        'collect Y coordinate'
        Y.append(Y)
        
        '''set previous position for next step'''
        x0 = x
        y0 = y
        
        k = k+1
    return X,Y

N =10000
U = walk2D(N,[0,0])
plt.figure(figsize = [8,8])
plt.plot(U[0],U[1],'-')
plt.xlabel('x-axis')
plt.ylabel('y-axis')
plt.grid(True)
plt.title('Browninan motion in 2D')
plt.show()