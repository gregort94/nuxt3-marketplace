export default () => {
  const toast = useToast()
  return {
    warn: (text: string) => toast.add({ title: text, color: 'red' }),
    success: (text: string) => toast.add({ title: text, color: 'primary' }),
  }
}
