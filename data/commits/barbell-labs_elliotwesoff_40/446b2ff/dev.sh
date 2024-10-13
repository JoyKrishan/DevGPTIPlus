#!/bin/bash

bspc wm -d \
  | jq -c '.monitors[0].desktops[] | .root // {} | [.[] | recurse | select(.instanceName?) | .instanceName] | join("; ")' \
  | jq -c -s . \
  >> /dev/shm/bspeww/desktops/data