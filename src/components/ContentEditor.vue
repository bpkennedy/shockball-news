<template>
    <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <v-row align="center" justify="space-around" class="menu-row editor-border ma-4 pa-2 mx-0 px-0 d-flex flex-wrap">
                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.bold() }"
                        @click.prevent="commands.bold"
                >
                    <v-icon>mdi-format-bold</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.italic() }"
                        @click.prevent="commands.italic"
                >
                    <v-icon>mdi-format-italic</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.strike() }"
                        @click.prevent="commands.strike"
                >
                    <v-icon>mdi-format-strikethrough</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.underline() }"
                        @click.prevent="commands.underline"
                >
                    <v-icon>mdi-format-underline</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.code() }"
                        @click.prevent="commands.code"
                >
                    <v-icon>mdi-code-tags</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.paragraph() }"
                        @click.prevent="commands.paragraph"
                >
                    <v-icon>mdi-format-paragraph</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                        @click.prevent="commands.heading({ level: 1 })"
                >
                    <v-icon>mdi-format-header-1</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                        @click.prevent="commands.heading({ level: 2 })"
                >
                    <v-icon>mdi-format-header-2</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                        @click.prevent="commands.heading({ level: 3 })"
                >
                    <v-icon>mdi-format-header-3</v-icon>
                </button>

                <button
                        class="menubar__button"
                        @click.prevent="showImagePrompt(commands.image)"
                >
                    <v-icon>mdi-image</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.bullet_list() }"
                        @click.prevent="commands.bullet_list"
                >
                    <v-icon>mdi-format-list-bulleted</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.ordered_list() }"
                        @click.prevent="commands.ordered_list"
                >
                    <v-icon>mdi-format-list-numbered</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.blockquote() }"
                        @click.prevent="commands.blockquote"
                >
                    <v-icon>mdi-format-quote-close</v-icon>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.code_block() }"
                        @click.prevent="commands.code_block"
                >
                    <v-icon>mdi-code-tags</v-icon>
                </button>

                <button
                        class="menubar__button"
                        @click.prevent="commands.horizontal_rule"
                >
                    <v-icon>mdi-minus</v-icon>
                </button>

                <button
                        class="menubar__button"
                        @click.prevent="commands.undo"
                >
                    <v-icon>mdi-undo</v-icon>
                </button>

                <button
                        class="menubar__button"
                        @click.prevent="commands.redo"
                >
                    <v-icon>mdi-redo</v-icon>
                </button>
            </v-row>
        </editor-menu-bar>

        <editor-content class="editor__content editor-border pa-1" :editor="editor" />
    </div>
</template>

<script>
    import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
    import {
        Blockquote,
        CodeBlock,
        HardBreak,
        Heading,
        HorizontalRule,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Italic,
        Image,
        Link,
        Strike,
        Underline,
        History,
    } from 'tiptap-extensions'
    export default {
        components: {
            EditorContent,
            EditorMenuBar,
        },
        data() {
            return {
                editor: new Editor({
                    extensions: [
                        new Blockquote(),
                        new BulletList(),
                        new CodeBlock(),
                        new HardBreak(),
                        new Heading({ levels: [1, 2, 3] }),
                        new HorizontalRule(),
                        new ListItem(),
                        new OrderedList(),
                        new TodoItem(),
                        new TodoList(),
                        new Link(),
                        new Bold(),
                        new Code(),
                        new Italic(),
                        new Image(),
                        new Strike(),
                        new Underline(),
                        new History(),
                    ],
                    content: `Enter your article content here...`,
        //             content: `
        //   <h2>
        //     Hi there,
        //   </h2>
        //   <p>
        //     this is a very <em>basic</em> example of tiptap.
        //   </p>
        //   <pre><code>body { display: none; }</code></pre>
        //   <ul>
        //     <li>
        //       A regular list
        //     </li>
        //     <li>
        //       With regular items
        //     </li>
        //   </ul>
        //   <blockquote>
        //     It's amazing 👏
        //     <br />
        //     – mom
        //   </blockquote>
        // `,
                }),
            }
        },
        methods: {
            showImagePrompt(command) {
                const src = prompt('Enter the url of your image here')
                if (src !== null) {
                    command({ src })
                }
            },
        },
        beforeDestroy() {
            this.editor.destroy()
        },
    }
</script>

<style lang="scss">
    .editor__content {
        img {
            max-width: 100%;
        }
    }
    .menu-row {
        .menubar__button {
            min-width: 3rem;
            border-radius: 2px;
            &.is-active {
                background-color: $secondary;
            }
        }
    }
    .editor-border {
        border: 1px solid $border-gray;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        &:focus {
            outline-width: 0;
        }
    }
    .ProseMirror-focused {
        &:focus {
            outline-width: 0;
        }
    }
</style>