//commands.ts
export interface ParsedCommand {
    isCommand: boolean;
    text?: string;
    cmd?: string;
    args?: string[];
}

export const parseCommand = (line: string): ParsedCommand => {
  const trimmed = line.trim();
  if (!trimmed.startsWith("/")) {
    return { isCommand: false, text: trimmed };
  }

  const [cmd, ...args] = trimmed.slice(1).split(/\s+/);
  return { isCommand: true, cmd: cmd.toLowerCase(), args };
};
