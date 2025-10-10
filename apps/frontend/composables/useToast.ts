export default function useToast(title: string, subtitle: string, type: "info" | "success" | "warning" | "error" = "info") {
  const { $toast } = useNuxtApp();
  $toast(`<div class="text-sm"><div><strong>${title}</strong></div><div>${subtitle}</div></div>`, {
    type: type,
    dangerouslyHTMLString: true,
  });
}
