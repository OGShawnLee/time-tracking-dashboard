<script lang="ts" context="module">
  function capitalize(str: string) {
    return str[0].toUpperCase() + str.substring(1);
  }
</script>

<script lang="ts">
  import { NavigableItem } from 'malachite-ui/components';
  import { currentTimeframe } from '@root/state';

  export let timeframe: TimeframeKey;

  $: isActive = timeframe === $currentTimeframe;
  $: textColor = isActive ? 'text-white' : 'text-neutral-desaturated';
</script>

<NavigableItem
  class="capitalize {textColor} font-medium cursor-pointer hover:text-white"
  aria-label="Set Timeframe to {capitalize(timeframe)}"
  on:focus={() => currentTimeframe.set(timeframe)}
  let:item>
  {timeframe}
</NavigableItem>
