
import pygame
from Snow import Snowflake
from random import randint
from sys import exit

def main():
	
	pygame.init()
	width, height = 1080, 580
	screen = pygame.display.set_mode((width, height))
	pygame.display.set_caption("Snow Simulation")
	clock = pygame.time.Clock()

	trees_back = pygame.image.load('trees_back.jpg').convert_alpha()
	trees_front = pygame.image.load('trees_front.png').convert_alpha()

	
	snowflakes = []
	for i in range(0, 500):
		position = (randint(0, width), randint(0, height))
		gravity = randint(1, 2)
		radius = randint(2, 4)
		snowflakes.append(Snowflake(position, radius, gravity))

	while True:
		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()
				exit()

		screen.blit(trees_back, (0, 0))		
		
		
		for snowflake in snowflakes:
			pygame.draw.circle(screen, snowflake.color, snowflake.pos, snowflake.radius)
			snowflake.controller(height, width)

		screen.blit(trees_front, (0, 0))	

		pygame.display.update()
		clock.tick(30)
	

if __name__ == "__main__":
	main()
