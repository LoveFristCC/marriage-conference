<script>
  import { enhance } from '$app/forms';
  import { toast } from 'svelte-sonner';
  import { Button } from '#lib/components/ui/button/index.js';
  import { Input } from '#lib/components/ui/input/index.js';
  import { Label } from '#lib/components/ui/label/index.js';
  import { Textarea } from '#lib/components/ui/textarea/index.js';

  /**
   * @type {{
   *   form?: import('./contact-form-types.js').ContactFormResult;
   *   action?: string;
   *   submitLabel?: string;
   *   askDevice?: boolean;
   *   messagePlaceholder?: string;
   * }}
   */
  let {
    form,
    action = '?/contact',
    submitLabel = 'Send message',
    askDevice = false,
    messagePlaceholder
  } = $props();

  const devices = ['iPhone', 'iPad', 'Android phone', 'Android tablet', 'Other'];

  let sending = $state(false);
  const id = $props.id();
</script>

{#if form?.success}
  <div
    class="rounded-xl border border-primary/30 bg-secondary p-6 text-center text-secondary-foreground"
    role="status"
  >
    <p class="font-display text-2xl tracking-wide uppercase">Message sent</p>
    <p class="mt-2">Thank you! We’ll get back to you soon.</p>
  </div>
{:else}
  <form
    method="post"
    {action}
    class="grid gap-5"
    novalidate
    use:enhance={() => {
      sending = true;
      return async ({ result, update }) => {
        await update();
        sending = false;
        if (result.type === 'success') toast.success('Thanks! Your message was sent.');
        else if (result.type === 'failure' && result.status >= 500)
          toast.error('Your message could not be sent. Please email or call us instead.');
      };
    }}
  >
    <div class="grid gap-5 sm:grid-cols-2">
      <div class="grid gap-2">
        <Label for="{id}-name">Name</Label>
        <Input
          id="{id}-name"
          name="name"
          autocomplete="name"
          required
          value={form?.values?.name ?? ''}
          aria-invalid={form?.errors?.name ? 'true' : undefined}
          aria-describedby={form?.errors?.name ? `${id}-name-error` : undefined}
        />
        {#if form?.errors?.name}
          <p id="{id}-name-error" class="text-sm text-destructive">{form.errors.name}</p>
        {/if}
      </div>
      <div class="grid gap-2">
        <Label for="{id}-email">Email</Label>
        <Input
          id="{id}-email"
          name="email"
          type="email"
          autocomplete="email"
          required
          value={form?.values?.email ?? ''}
          aria-invalid={form?.errors?.email ? 'true' : undefined}
          aria-describedby={form?.errors?.email ? `${id}-email-error` : undefined}
        />
        {#if form?.errors?.email}
          <p id="{id}-email-error" class="text-sm text-destructive">{form.errors.email}</p>
        {/if}
      </div>
    </div>

    {#if askDevice}
      <div class="grid gap-2">
        <Label for="{id}-device">
          Device <span class="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <select
          id="{id}-device"
          name="device"
          class="h-9 w-full rounded-md border border-input bg-transparent px-2.5 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
        >
          <option value="" selected={!form?.values?.device}>Select your device</option>
          {#each devices as device (device)}
            <option value={device} selected={form?.values?.device === device}>{device}</option>
          {/each}
        </select>
      </div>
    {/if}

    <div class="grid gap-2">
      <Label for="{id}-message">Message</Label>
      <Textarea
        id="{id}-message"
        name="message"
        rows={5}
        placeholder={messagePlaceholder}
        required
        value={form?.values?.message ?? ''}
        aria-invalid={form?.errors?.message ? 'true' : undefined}
        aria-describedby={form?.errors?.message ? `${id}-message-error` : undefined}
      />
      {#if form?.errors?.message}
        <p id="{id}-message-error" class="text-sm text-destructive">{form.errors.message}</p>
      {/if}
    </div>

    <!-- Honeypot field for bots; hidden from people and screen readers. -->
    <div class="absolute -left-[9999px]" aria-hidden="true">
      <label for="{id}-company">Company</label>
      <input id="{id}-company" name="company" tabindex="-1" autocomplete="off" />
    </div>

    {#if form?.message}
      <p class="text-sm text-destructive" role="alert">{form.message}</p>
    {/if}

    <div>
      <Button type="submit" size="lg" disabled={sending}>
        {sending ? 'Sending…' : submitLabel}
      </Button>
    </div>
  </form>
{/if}
