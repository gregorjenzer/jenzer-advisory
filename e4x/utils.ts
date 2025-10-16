/**
 * Creates a mailto link with encoded subject and body parameters
 * @param subject - Email subject line
 * @param body - Email body content
 * @returns Formatted mailto URL string
 */
export const mto = (subject: string, body: string) =>
  `mailto:gregor@jenzeradvisory.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
