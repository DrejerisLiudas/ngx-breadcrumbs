#!/usr/bin/env bash

yarn unlink @exalif/ngx-breadcrumbs

cd build/ngx-breadcrumbs
yarn unlink
yarn link
cd ../..

yarn link @exalif/ngx-breadcrumbs