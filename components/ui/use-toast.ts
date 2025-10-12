import { Toast } from "@/components/ui/toast"

export function useToast() {
  return {
    toast: (props: {
      title?: string;
      description?: string;
      duration?: number;
      variant?: "default" | "destructive";
    }) => {
      // Simple alert fallback since we don't have the full toast implementation
      alert(`${props.title}\n${props.description}`);
    }
  };
}