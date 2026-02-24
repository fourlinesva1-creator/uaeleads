"""Fix single-quoted strings where a quote is actually a word apostrophe (letter'letter).
The key insight: when parsing a single-quoted string, if we hit a quote followed by a letter,
it's a word apostrophe (e.g., Ajman's), not the string terminator."""


def fix_line(line):
    result = []
    i = 0
    while i < len(line):
        ch = line[i]
        if ch == "'":
            # Start of a potential single-quoted string
            j = i + 1
            string_content = []
            closed = False
            has_word_apostrophe = False

            while j < len(line):
                c = line[j]
                if c == '\\':
                    # Escaped character - include as-is
                    string_content.append(c)
                    j += 1
                    if j < len(line):
                        string_content.append(line[j])
                        j += 1
                elif c == "'":
                    # Is this a word apostrophe (letter'letter) or string terminator?
                    prev_alpha = len(string_content) > 0 and string_content[-1].isalpha()
                    next_alpha = (j + 1 < len(line)) and line[j + 1].isalpha()

                    if prev_alpha and next_alpha:
                        # It's a word apostrophe (e.g., Ajman's, RAK's)
                        string_content.append(c)
                        has_word_apostrophe = True
                        j += 1
                    else:
                        # It's the closing quote
                        closed = True
                        break
                else:
                    string_content.append(c)
                    j += 1

            if closed and has_word_apostrophe:
                # Convert to double-quoted string, escaping any existing double quotes
                inner = ''.join(string_content)
                inner_fixed = inner.replace('"', '\\"')
                result.append('"')
                result.append(inner_fixed)
                result.append('"')
                i = j + 1
            elif closed:
                inner = ''.join(string_content)
                result.append("'")
                result.append(inner)
                result.append("'")
                i = j + 1
            else:
                # Unclosed quote - leave as-is
                result.append(ch)
                i += 1
        else:
            result.append(ch)
            i += 1
    return ''.join(result)


with open('src/data/city-content.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

fixed_lines = [fix_line(line) for line in lines]
changed = sum(1 for a, b in zip(lines, fixed_lines) if a != b)

with open('src/data/city-content.ts', 'w', encoding='utf-8') as f:
    f.writelines(fixed_lines)

print(f'Done - fixed {changed} lines')
