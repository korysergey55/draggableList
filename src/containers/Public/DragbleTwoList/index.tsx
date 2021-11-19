import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { LiComponent } from '../Item/Styled'
import styles from './styles.module.scss'

const initial = [
  { id: '1', content: 'apple' },
  { id: '2', content: 'avocado' },
  { id: '3', content: 'apricot' },
  { id: '4', content: 'pear' },
  { id: '5', content: 'grapefruit' },
]
const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const DragbleTwoList = () => {
  const [state, setState] = useState<any>([
    { id: '1', content: 'apple' },
    { id: '2', content: 'avocado' },
    { id: '3', content: 'apricot' },
    { id: '4', content: 'pear' },
    { id: '5', content: 'grapefruit' },
  ])

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }
    if (result.destination.index === result.source.index) {
      return
    }
    const quotes = reorder(state, result.source.index, result.destination.index)
    setState(quotes)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        <div className={styles.wripperMyList}>
          <h2 className={styles.title}>My delivery-list</h2>
          <Droppable droppableId="my-list">
            {provided => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                {state?.map((item: any, index: number) => (
                  <Draggable draggableId={item.id} index={index}>
                    {provided => (
                      <LiComponent
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.content}
                      </LiComponent>
                    )}
                  </Draggable>
                ))}
              </ul>
            )}
          </Droppable>
        </div>
        <div className={styles.wripper}>
          <Droppable droppableId="food-list">
            {provided => (
              <ul
                className={styles.remuvebleList}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className={styles.title}>Food-list</h2>
                {state?.map((item: any, index: number) => (
                  <Draggable draggableId={item.id} index={index}>
                    {provided => (
                      <LiComponent
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.content}
                      </LiComponent>
                    )}
                  </Draggable>
                ))}
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  )
}
export default DragbleTwoList

{
  /* <Droppable droppableId="infinity-list">
            {provided => (
              <ul
                className={styles.remuvebleList}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className={styles.title}>Infinity-List</h2>
                {state.quotes &&
                  state.quotes.map((item: any, index: number) => (
                    <Draggable draggableId={item.id} index={index}>
                      {provided => (
                        <LiComponent
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.content}
                        </LiComponent>
                      )}
                    </Draggable>
                  ))}
              </ul>
            )}
          </Droppable> */
}