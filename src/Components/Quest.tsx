import React, { useEffect, useRef, useState } from 'react'
import QuestType from '../interfaces/QuestType'
import './Quest.css'

let oldQuests = [] as QuestType[]

const Quest = ({
  quests
}: {
  quests: QuestType[]
}) => {
  const firstActive = useRef<HTMLLIElement>(null)

  const [completed, setCompleted] = useState<QuestType[]>([])

  useEffect(() => {
    setCompleted(oldQuests.filter((quest) => !quests.includes(quest)))
    oldQuests = [...quests]

    setTimeout(() => firstActive.current?.scrollIntoView(true), 1000)
  }, [quests])

  return (
    <div className='quests'>
      <h1>Quests</h1>
      <ul>
        {[...completed, ...quests].map((quest, index) =>
          <li
            ref={index === completed.length ? firstActive : undefined}
            key={`quest_${index}`}
            className={`quest-box ${index < completed.length ? 'completed' : ''}`.trimEnd()}
          >
            {`Raise $${
              quest.target.donation
            }${
              quest.target.cause ? ` for ${quest.target.cause}` : ''
            }${
              quest.target.location ? ` at ${quest.target.location}` : ''
            }`}
            <br />
            {`${quest.reward} EXP`}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Quest