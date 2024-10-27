#!/bin/bash
rm -rf packages/*/dist
pnpm i
pnpm build