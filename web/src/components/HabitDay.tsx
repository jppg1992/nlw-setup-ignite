import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { ProgressBar } from './Progressbar'

interface HabitDayProps {
  amount: number
  completed: number
}

export function HabitDay({ completed, amount }: HabitDayProps) {
  const CompletedPercentage = Math.round((completed / amount) * 100)

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 border-2 rounded-lg', {
          'bg-zinc-900  border-zinc-800': CompletedPercentage === 0,
          'bg-violet-900 border-violet-800':
            CompletedPercentage > 0 && CompletedPercentage < 20,
          'bg-violet-800 border-violet-700':
            CompletedPercentage >= 20 && CompletedPercentage < 40,
          'bg-violet-700 border-violet-600':
            CompletedPercentage >= 40 && CompletedPercentage < 60,
          'bg-violet-600 border-violet-500':
            CompletedPercentage >= 60 && CompletedPercentage < 80,
          'bg-violet-500 border-violet-400': CompletedPercentage >= 80
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">Terça-Feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            17/01
          </span>
          <ProgressBar progress={CompletedPercentage} />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
