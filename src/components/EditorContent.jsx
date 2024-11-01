import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Schema, DOMParser } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';
import { exampleSetup } from 'prosemirror-example-setup';

const mySchema = new Schema({
  nodes: {
    doc: { content: "block+" },
    paragraph: { group: "block", content: "inline*" },
    title: { group: "block", content: "inline*", marks: "_" },
    subtitle: { group: "block", content: "inline*", marks: "_" },
    heading1: { group: "block", content: "inline*", marks: "_" },
    heading2: { group: "block", content: "inline*", marks: "_" },
    heading3: { group: "block", content: "inline*", marks: "_" },
    text: { inline: true },
    hard_break: { inline: true, group: "inline" }
  },
  marks: {
    bold: {},
    italic: {},
    underline: {}
  }
});

export const EditorContent = ({ content, onChange }) => {
  useEffect(() => {
    const view = new EditorView(document.querySelector("#editor"), {
      state: EditorState.create({
        schema: mySchema,
        plugins: exampleSetup({ schema: mySchema })
      }),
      dispatchTransaction(transaction) {
        let newState = view.state.apply(transaction);
        view.updateState(newState);
        onChange(newState.doc.toJSON());
      }
    });

    return () => {
      view.destroy();
    };
  }, []);

  return <div id="editor" className="p-4 flex-1 overflow-y-auto" />;
};