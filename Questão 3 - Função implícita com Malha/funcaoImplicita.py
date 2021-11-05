from OpenGL.GLUT import *
from OpenGL.GLU import *
from OpenGL.GL import *
import math
import numpy as np

r = 2
n = 25
halfpi = math.pi / 2


def f(u, v):
    # theta = (u*math.pi/(n-1))-halfpi
    theta = (u * 2 * math.pi) / (n - math.pi)
    w = (v * 4 / (n - 1)) - 2
    x = w * math.cos(theta)
    y = w ** 2
    z = w * math.sin(theta)
    return x, y, z


def desenhaEsfera():
    glPushMatrix()
    glBegin(GL_QUAD_STRIP)
    for i in range(n):
        for j in range(n):
            # glVertex3fv(f(i,j))
            # glColor3fv(((1.0 * i / (n - 1)), 0, 1 - (1.0 * i / (n - 1))))
            glColor3fv(((1.0 * i / (n - 1)), 0, 1 - (1.0 * i / (n - 1))))
            glVertex3fv(f(i, j))
            glVertex3fv(f(i + 1, j))

    glEnd()
    glPopMatrix()


a = 0


def desenha():
    global a
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
    glPushMatrix()
    glRotatef(a, 0, 1, 0)
    desenhaEsfera()
    glPopMatrix()
    glutSwapBuffers()
    a += 1


def timer(i):
    glutPostRedisplay()
    glutTimerFunc(50, timer, 1)


# PROGRAMA PRINCIPAL
glutInit(sys.argv)
glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH | GLUT_MULTISAMPLE)
glutInitWindowSize(800, 600)
glutCreateWindow("Esfera")
glutDisplayFunc(desenha)
glEnable(GL_MULTISAMPLE)
glEnable(GL_DEPTH_TEST)
glClearColor(0., 0., 0., 1.)
gluPerspective(45, 800.0 / 600.0, 0.1, 100.0)
glTranslatef(0.0, 0.0, -8)
glutTimerFunc(50, timer, 1)
glutMainLoop()


