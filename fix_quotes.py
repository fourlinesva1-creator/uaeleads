"""Fix single-quoted strings that contain unescaped apostrophes by converting to double quotes."""

with open('src/data/city-content.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

fixed_lines = []
for line in lines:
    fixed_line = fix_line(line)
    fixed_lines.append(fixed_line)

def fix_line(line):
    """Process a line: find single-quoted strings with apostrophes inside and convert to double quotes."""
    result = []
    i = 0
    while i < len(line):
        ch = line[i]
        if ch == "'":
            # Start of a potential single-quoted string
            # Collect everything until the closing single quote
            j = i + 1
            string_content = []
            has_apostrophe = False
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
                    # End of string
                    break
                else:
                    if c == "'" and j + 1 < len(line) and line[j+1].isalpha():
                        has_apostrophe = True
                    string_content.append(c)
                    j += 1

            inner = ''.join(string_content)

            # Check if inner content contains an unescaped apostrophe that would be a word contraction
            has_problem = False
            for k, c in enumerate(inner):
                if c == "'":
                    # Check if it looks like a word contraction
                    if k > 0 and (k + 1 < len(inner)) and inner[k-1].isalpha() and inner[k+1].isalpha():
                        has_problem = True
                        break

            if has_problem and j < len(line) and line[j] == "'":
                # Convert to double-quoted string
                inner_fixed = inner.replace('"', '\\"')
                result.append('"')
                result.append(inner_fixed)
                result.append('"')
                i = j + 1
            else:
                # Keep as single-quoted
                result.append("'")
                result.append(inner)
                if j < len(line) and line[j] == "'":
                    result.append("'")
                    i = j + 1
                else:
                    i = j
        else:
            result.append(ch)
            i += 1

    return ''.join(result)

with open('src/data/city-content.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

fixed_lines = []
for line in lines:
    fixed_line = fix_line(line)
    fixed_lines.append(fixed_line)

with open('src/data/city-content.ts', 'w', encoding='utf-8') as f:
    f.writelines(fixed_lines)

print('Done')
