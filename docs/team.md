---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/57285390?s=400&u=c4d380f2e2111d284c7fbb073f1df138c148b153&v=4',
    name: 'Leet',
    title: '制作者',
    links: [
      { icon: 'github', link: 'https://github.com/lily0325' },
    ]
  },
  
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      制作者
    </template>

  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>