#!/bin/bash

# Strapi deployment script
# Usage: pnpm deploy (runs this script via package.json)

set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Get the repo root
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

print_info "Starting Strapi deployment from $REPO_ROOT..."

# Pull latest code from GitHub
print_info "Pulling latest code from GitHub..."
git -C "$REPO_ROOT" pull origin $(git -C "$REPO_ROOT" rev-parse --abbrev-ref HEAD)

# Install dependencies (production)
print_info "Installing dependencies..."
pnpm --dir "$REPO_ROOT" install --frozen-lockfile --prod

# Build Strapi
print_info "Building Strapi..."
export NODE_OPTIONS="--max-old-space-size=2048"
pnpm --dir "$REPO_ROOT" run build

# Reload PM2
print_info "Reloading PM2 process..."
pm2 reload "$REPO_ROOT/ecosystem.config.js" --env production

# Save PM2 state
print_info "Saving PM2 state..."
pm2 save

print_success "Strapi deployment complete!"
print_info "Status:"
pm2 info fourwordz-strapi
