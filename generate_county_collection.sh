while read county;
do
county=${county//[$'\t\r\n']}

cat > _counties/${county,,}.md << EOF
---
layout: county
county: $county
title: Co. $county
---
EOF
done <_data/counties.yaml
