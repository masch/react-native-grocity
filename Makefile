.PHONY: install android ios web start clean android-run ios-run

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

clean:
	rm -rf node_modules apps/*/node_modules packages/*/node_modules
	bun cache clean
	@echo "🧼 All clean. Run 'make setup' again."
