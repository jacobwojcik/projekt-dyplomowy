export const slowSsr = `export default function Page() {
  const [fastData, slowData] = await Promise.all([getFastData(), getSlowData()])
  // Dane zostaną wyrenderowane dopiero po wykonaniu obydwóch zapytań

  return (
    <section>
      {fastData}
      {slowData}
    </section>
  )
}`


export const streamingWithSuspense = `import { Suspense } from 'react'
import { ItemsList } from './Components'
 
export default function Page() {

  const data = await getFastData();

  return (
    <section>
      {fastData}

      <Suspense fallback={<p>Loading</p>}>
        <ItemsList />
      </Suspense>

    </section>
  )
}`

export const itemsListComponent = `export default function ItemsList() {
  const slowData = await getSlowData();

  return (
  <>
    {slowData}
  </>
  )
}`

