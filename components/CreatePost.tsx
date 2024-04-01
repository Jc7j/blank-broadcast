'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

const CreatePostFormSchema = z.object({
  title: z
  .string()
  .min(1, 'Content is required')
  .max(316, 'Max characters is 255'),
  content: z
    .string()
    .min(1, 'Content is required')
    .max(316, 'Max characters is 316'),
})

export default function CreatePost() {
  const router = useRouter()

  const form = useForm<z.infer<typeof CreatePostFormSchema>>({
    resolver: zodResolver(CreatePostFormSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  })

  const {
    control,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = form

  async function onSubmitHandler(data: z.infer<typeof CreatePostFormSchema>) {
    console.log("datatatata", data)
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'applcation/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      // setOpen(false)
      router.push('/home')
    } catch (err) {
      console.error('Failed to submit form:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input {...register('title')}/>
      <textarea
      {...register("content")}
        rows={7}
      />
      <button type="submit">
        Send it
      </button>
    </form>
  )
}
