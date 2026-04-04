.PHONY: install android android-native db-push ios ios-native web start start-native start-clean clean android-reset android-stop android-restart lint

ANDROID_HOME ?= $(HOME)/dev/android/sdk
EMULATOR = $(ANDROID_HOME)/emulator/emulator
FIRST_AVD = $(shell $(EMULATOR) -list-avds | head -n 1)

install:
	bun install

android:
	bun run android

android-native:
	bun run android:native

ios:
	bun run ios

ios-native:
	bun run ios:native

web:
	bun run web

start:
	bun run start

start-native:
	bun run start-native

start-clean:
	bun run start:clean

lint:
	bun run lint

db-push:
	bun run db:push

db-seed-grocery:
	bun run db:seed:grocery

android-reset:
	@echo "🚀 Resetting the emulator: $(FIRST_AVD)..."
	$(EMULATOR) @$(FIRST_AVD) -wipe-data &

android-stop:
	@echo "🛑 Stopping the emulator..."
	-pkill -9 emulator
	-pkill -9 qemu-system

android-restart: android-stop
	@echo "🔄 Restarting the emulator: $(FIRST_AVD)..."
	@sleep 1
	$(EMULATOR) @$(FIRST_AVD) &

fix-deps:
	bun run expo-fix-deps

clean:
	rm -rf .expo
	rm -rf node_modules
	bun cache clean
	@echo "🧼 All clean. Run 'make install' again."
