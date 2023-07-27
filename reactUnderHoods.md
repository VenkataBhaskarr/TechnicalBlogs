Generally less than 50ms to execute a simple task along with its rendering by broswer javascript engine thread is considered as efficient if a task 
takes up more than 50ms it is termed as long running task because the thread not preempt the task in between 

how react 18 changes this is using useTransition hook 
we need to wrap the state which is making a long task in the useTransition hook such that it will render bit by bit by consistently monitorung the main
thread for important interactions

React Server Components

Suspense component
    <Suspense fallback={<Skeleton />}>
      <BlogPosts />
    </Suspense>

cache functions
export const getUser = cache(async (id) => {
  const user = await db.user.findUnique({ id })
  return user;
})

for more give it a read ` https://vercel.com/blog/how-react-18-improves-application-performance `
