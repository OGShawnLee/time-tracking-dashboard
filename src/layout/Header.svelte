<script lang="ts">
  import { Navigable } from 'malachite-ui/components';
  import { TimeframeButton } from '@lib/components';
  import { jeremy } from '@assets';

  let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<section class="bg-neutral-dark rounded-2xl overflow-hidden | lg:col-span-3">
  <header
    class="p-8 | flex items-center gap-6 | bg-blue rounded-2xl | lg:(flex-col items-start gap-12 h-8/12)">
    <img
      class="h-16 w-16 min-w-16 | rounded-full ring-3 ring-white | lg:(h-20 w-20 min-w-20)"
      src={jeremy}
      alt="" />
    <h2 class="grid">
      <span class="text-sm"> Report for </span>
      <span class="text-xl text-white | md:text-2xl lg:text-4xl"> Jeremy Robson </span>
    </h2>
  </header>
  <Navigable as="nav" class="p-8 py-4 | lg:h-4/12" finite vertical={width >= 1024}>
    <ul
      class="flex items-center justify-between | @md:(gap-18 justify-center) lg:(h-full flex-col items-start gap-4 justify-center)">
      <li>
        <TimeframeButton timeframe="daily" />
      </li>
      <li>
        <TimeframeButton timeframe="weekly" />
      </li>
      <li>
        <TimeframeButton timeframe="monthly" />
      </li>
    </ul>
  </Navigable>
</section>
