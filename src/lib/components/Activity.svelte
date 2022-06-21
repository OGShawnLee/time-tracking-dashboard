<script lang="ts">
  import { currentTimeframe } from '@root/state';
  import { tweened } from 'svelte/motion';
  import { quadIn } from 'svelte/easing';

  export let activity: Activity;

  let timeframe = activity['timeframes'][$currentTimeframe];
  $: timeframe = activity['timeframes'][$currentTimeframe];

  // ! timeframe is undefined here unless it is initialised
  const current = tweened(timeframe.current, { easing: quadIn });
  const previous = tweened(timeframe.current, { easing: quadIn });

  $: current.set(timeframe.current);
  $: previous.set(timeframe.previous);
</script>

<article
  class="pt-12 rounded-t-2xl rounded-b-3xl | @md:w-60"
  style="background-image:url({activity.icon}); --bg-color:{activity.color};">
  <div
    class="p-8 | flex flex-col | bg-neutral-dark rounded-2xl cursor-pointer focus-within:(bg-neutral-less-dark) | lg:gap-6"
    tabindex="0">
    <header class="flex items-center justify-between">
      <h3 class="capitalize text-lg text-white font-medium">
        {activity.title}
      </h3>
      <button class="outline-none hover:text-white focus:text-white">
        <span class="sr-only"> Options </span>
        <i class="bx bx-dots-horizontal-rounded text-2xl" />
      </button>
    </header>
    <div class="flex items-center justify-between | md:(flex-col items-start gap-3)">
      <span class="text-2xl text-white | md:text-4xl xl:text-6xl">
        {$current.toFixed()}hrs
      </span>
      <span class="text-sm">
        Last Week - {$previous.toFixed()}hrs
      </span>
    </div>
  </div>
</article>

<style>
  article {
    background-color: var(--bg-color);
    background-repeat: no-repeat;
    background-position: top right 1rem;
  }
</style>
