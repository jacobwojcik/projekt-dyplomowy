'use client';

import { useToast } from '@/lib/hooks';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './Toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      <>
        {toasts.map(({ id, title, description, action, variant, ...props }) => (
          <Toast key={id} variant={variant} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose variant={variant} />
          </Toast>
        ))}
        <ToastViewport />
      </>
    </ToastProvider>
  );
}
