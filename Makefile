# Makefile for martsokha personal website

# Variables
DIST_DIR := dist

# Colors for output
COLOR_RESET := \033[0m
COLOR_BLUE := \033[34m
COLOR_GREEN := \033[32m
COLOR_YELLOW := \033[33m

.PHONY: install
install:
	@echo "$(COLOR_BLUE)Installing dependencies...$(COLOR_RESET)"
	@npm ci
	@echo "$(COLOR_GREEN)✓ Dependencies installed successfully$(COLOR_RESET)"

.PHONY: build
build:
	@echo "$(COLOR_BLUE)Building website...$(COLOR_RESET)"
	@npm run build
	@echo "$(COLOR_GREEN)✓ Build completed successfully$(COLOR_RESET)"
	@echo "$(COLOR_YELLOW)Output directory: $(DIST_DIR)$(COLOR_RESET)"

.PHONY: clean
clean:
	@echo "$(COLOR_BLUE)Cleaning build artifacts...$(COLOR_RESET)"
	@rm -rf $(DIST_DIR)
	@rm -rf node_modules/.astro
	@rm -rf .astro
	@echo "$(COLOR_GREEN)✓ Clean completed successfully$(COLOR_RESET)"
