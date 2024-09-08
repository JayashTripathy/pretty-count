import {
  RawCode,
  Pre,
  highlight,
  AnnotationHandler,
  InnerLine,
} from "codehike/code"
import { HTMLAttributes } from "react"
import { CopyButton } from "./copy-button"


interface CodeProps extends HTMLAttributes<HTMLDivElement> {
  codeblock: RawCode
}

export async function Code({ codeblock, ...props }: CodeProps) {
  const highlighted = await highlight(codeblock, "github-dark-dimmed")

  const noteAnnotations = highlighted.annotations.filter(
    ({ name }) => name == "ref",
  )
  const notes = noteAnnotations.map(({ query }) => query)

  noteAnnotations.forEach((a, index) => {
    a.data = { n: index + 1 }
  })
  return (
    <div {...props} className={`relative ${props.className} `}>
      <CopyButton text={highlighted.code} />
      <Pre
        className="m-0 p-4 bg-secondary/50 rounded-lg"
        code={highlighted}
        handlers={[footnotes]}
      />
      <ul className="mt-4 list-none">
        {notes.map((ref, index) => (
          <li key={index} className="text-sm">
            <Number n={index + 1} />
            <span className="pl-1">{ref}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const footnotes: AnnotationHandler = {
  name: "ref",
  AnnotatedLine: ({ annotation, ...props }) => {
    return (
      <div className="flex gap-2">
        <InnerLine merge={props} />
        <Number n={annotation.data.n} />
      </div>
    )
  },
}

function Number({ n }: { n: number }) {
  return (
    <span
      data-value={n}
      className="after:content-[attr(data-value)] border border-slate-400 rounded-full inline-block h-4 w-4 text-center leading-4 text-sm font-mono self-center"
    />
  )
}
