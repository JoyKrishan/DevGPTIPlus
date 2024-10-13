board_id = '123'  # Replace with the actual board ID

board = jira.board(board_id)
can_create_ticket = board.can_create()
print(f"Can create ticket on board {board_id}? {can_create_ticket}")