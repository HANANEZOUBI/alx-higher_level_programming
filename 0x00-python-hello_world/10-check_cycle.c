#include <stdio.h>
#include <stdlib.h>
#include "lists.h"

/**
 * check_cycle - to check if list is cyclical or not
 * @list: pointer to check
 * Return: 1 if cyclical,or 0 otherwise
 */
int check_cycle(listint_t *list)
{
	listint_t *slow = list, *fast = list;

	while (fast && fast->next)
	{
		slow = slow->next;
		fast = fast->next->next;
		if (slow == fast)
			return (1);
	}
	return (0);
}
