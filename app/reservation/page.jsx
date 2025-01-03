"use client";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from 'next/navigation';

// Form validation schema
const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
    date: yup
    .date()
    .typeError("Please enter a valid date")  
    .required("Date is required")  
    .min(new Date(), "Date cannot be in the past"),
  timeSlot: yup.string().required("Please select a time slot"),
  guests: yup
    .string()
    .matches(/^[0-9]+$/, "Please enter a valid number") 
    .test(
      "is-valid-number",
      "Please enter a number between 1 and 50",
      (value) => {
        const numberValue = parseInt(value, 10);
        return numberValue >= 1 && numberValue <= 50; // Validates the number range
      }
    )
    .required("Number of guests is required"),
  specialRequests: yup
    .string()
    .max(500, "Special requests cannot exceed 500 characters"),
});

const timeSlots = [
  "11:30 AM - 12:30 PM",
  "12:30 PM - 1:30 PM",
  "1:30 PM - 2:30 PM",
  "2:30 PM - 3:30 PM",
  "5:30 PM - 6:30 PM",
  "6:30 PM - 7:30 PM",
  "7:30 PM - 8:30 PM",
  "8:30 PM - 9:30 PM",
];

const ReservationForm = () => {
  const [selectedSlot, setSelectedSlot] = useState("");
  const router = useRouter(); 

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      date: "",
      timeSlot: "",
      guests: "",
      specialRequests: "",
    },
  });

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setValue("timeSlot", slot, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    localStorage.setItem("bookingData", JSON.stringify(data))
    console.log(data);
    router.push("/confirmation")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 min-w-lg">
        <h2
          style={{ color: "#9a3412 " }}
          className="text-2xl font-bold text-center mb-6"
        >
          Make a Reservation
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Full Name"
                sx={{ marginBottom: "15px" }}
                variant="outlined"
                fullWidth
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                sx={{ marginBottom: "15px" }}
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          {/* Phone Number */}
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone Number"
                sx={{ marginBottom: "15px" }}
                variant="outlined"
                fullWidth
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            )}
          />

          {/* Date and Time Slots */}
          <div className="grid grid-cols-1 gap-4">
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Date"
                  sx={{ marginBottom: "15px" }}
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.date}
                  helperText={errors.date?.message}
                />
              )}
            />

            {/* Time Slots */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Select Time Slot</p>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <Chip
                    key={slot}
                    label={slot}
                    onClick={() => handleSlotSelect(slot)}
                    color={selectedSlot === slot ? "primary" : "default"}
                    sx={{
                      marginBottom: "8px",
                      bgcolor: selectedSlot === slot ? "#ea580c" : "default",
                      "&:hover": {
                        bgcolor: selectedSlot === slot ? "#ea580c" : "",
                      },
                    }}
                  />
                ))}
              </div>
              {errors.timeSlot && (
                <p style={{color: "#ef4444", fontSize:"12px ", marginBottom:"15px", marginLeft:"15px" }} className="text-red-500 text-sm mt-1">
                  {errors.timeSlot.message}
                </p>
              )}
            </div>
          </div>

          {/* Number of Guests */}
          <Controller
            name="guests"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Number of Guests"
                type="text"
                sx={{ marginBottom: "15px" }}
                variant="outlined"
                fullWidth
                inputProps={{ min: 1, max: 20 }}
                error={!!errors.guests}
                helperText={errors.guests?.message}
              />
            )}
          />

          {/* Special Requests */}
          <Controller
            name="specialRequests"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Special Requests (Optional)"
                variant="outlined"
                sx={{ marginBottom: "15px" }}
                fullWidth
                multiline
                rows={3}
                error={!!errors.specialRequests}
                helperText={errors.specialRequests?.message}
              />
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg"
            style={{ backgroundColor: "#ea580c" }}
          >
            Book Table
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
