<script>
  import { Activity } from '@lib/components';
  import { data } from '@assets';
</script>

<section class="lg:col-span-9">
  <h2 class="sr-only">Dashboard</h2>
  <div class="grid gap-6 | md:grid-cols-2 lg:grid-cols-3">
    {#each data as activity}
      <Activity {activity} />
    {/each}
  </div>
</section>
