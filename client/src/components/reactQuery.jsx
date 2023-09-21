import customFetch from '../utlies'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const useGetAllTask = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/')
      return data
    },
  })

  return { isLoading, data, error }
}

export const useCreateTask = () => {
  const qureyClient = useQueryClient()
  const { mutate: createTask } = useMutation({
    mutationFn: (taskTitel) => customFetch.post('/', { title: taskTitel }),
    onSuccess: () => {
      qureyClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success('Task Added')
    },
    onError: (error) => {
      toast.error(error.response.data.msg)
    },
  })

  return { createTask }
}

export const useEditTask = () => {
  const queryClient = useQueryClient()
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return { editTask }
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`/${taskId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })

      toast.warn('Task delete!')
    },
  })

  return { deleteTask, isLoading }
}
