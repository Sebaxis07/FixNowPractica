import mongoose, { Schema } from "mongoose";

interface IAgenda {
    title: string;
    description: string;
    status: string;
    priority: string;
    category: string;
    assignedTo: string;
    assignedBy: string;
    createdAt: Date;
    updatedAt: Date;
}