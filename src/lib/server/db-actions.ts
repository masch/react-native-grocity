import { desc, eq } from "drizzle-orm";
import { db } from "./db/client";
import { groceryItems } from "./db/schema";

export const listGroceryItems = async () => {
    const rows = await db
        .select()
        .from(groceryItems)
        .orderBy(
            desc(groceryItems.updatedAt)
        )

    return rows;
}

export const createGroceryItem = async (input: {
    name: string,
    category: string,
    quantity: number,
    priority: string,
}) => {
    const [row] = await db
        .insert(groceryItems).values({
            id: crypto.randomUUID(),
            name: input.name,
            category: input.category,
            quantity: Math.max(1, input.quantity),
            purchased: false,
            priority: input.priority,
            updatedAt: Date.now(),
        })
        .returning();

    return row;
}

export const setGroceryItemPurchased = async (id: string, purchased: boolean) => {
    const [row] = await db
        .update(groceryItems)
        .set({
            purchased,
            updatedAt: Date.now(),
        })
        .where(eq(groceryItems.id, id)).
        returning();

    return row;
}

export const updateGroceryItemQuantity = async (id: string, quantity: number) => {
    const [row] = await db
        .update(groceryItems)
        .set({
            quantity: Math.max(1, quantity),
            updatedAt: Date.now(),
        })
        .where(eq(groceryItems.id, id))
        .returning();

    return row;
}

export const deleteGroceryItem = async (id: string) => {
    const [row] = await db
        .delete(groceryItems)
        .where(eq(groceryItems.id, id))
        .returning();

    return row;
}

export const clearPurchasedItems = async () => {
    const [row] = await db
        .delete(groceryItems)
        .where(eq(groceryItems.purchased, true))
        .returning();

    return row;
}