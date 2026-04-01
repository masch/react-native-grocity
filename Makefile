.PHONY: install android ios web start clean

install:
	bun install

android:
	bun run android

ios:
	bun run ios

web:
	bun run web

start:
	bun run start

clean:
	bun run clean