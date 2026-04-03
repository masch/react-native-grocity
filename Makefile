.PHONY: install android ios web start clean android-run ios-run lint

install:
	bun install

android:
	bun run android

android-run:
	bun run run:android

ios:
	bun run ios

ios-run:
	bun run run:ios

web:
	bun run web

start:
	bun run start

lint:
	bun run lint

clean:
	rm -rf node_modules
	bun cache clean
	@echo "🧼 All clean. Run 'make install' again."
