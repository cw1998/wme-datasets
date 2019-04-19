#!/bin/bash

while read county;
do
county=${county//[$'\t\r\n']}
county=${county/'- '/''}
cat > _counties/${county,,}.md << EOF
---
layout: county
county: $county
title: Co. $county
---
EOF
done < <(tail -n +2 _data/counties.yaml)
