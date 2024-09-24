"use strict";

var ordersApp = (function() {
    // Method to handle order status form submission
    var OrderStatus = function() {
        $("#orderStatusForm").submit(function(event) {
            event.preventDefault();  // Prevent default form submission
            event.stopImmediatePropagation();  // Stop other handlers from running

            // Check if the form is valid
            if ($("#orderStatusForm").valid()) {
                var options = {
                    success: function(response) {
                        // Show and update the order status panel
                        $("#pnlOrderStatus").removeClass("d-none");
                        $("#pnlOrderStatus").html(response);
                    },
                    error: function(xhr) {
                        console.error(xhr);  // Log errors to the console
                    }
                };

                // Submit the form via AJAX
                $("#orderStatusForm").ajaxSubmit(options);
            }
        });
    };

    // Method to load content into the cart modal and show it
    var CartModal = function(cartId) {
        $.get("/myorigin/cart/" + cartId, function(response) {
            $("#cartModalContent").html(response);
            $("#cartModal").modal("show");
        });
    };

    // Method to hide the cart modal and clear its content
    var CartModalCleaning = function() {
        $("#cartModal").modal("hide");
        $("#cartModalContent").html("");
    };

    // Return the public API
    return {
        OrderStatus: OrderStatus,
        CartModal: CartModal,
        CartModalCleaning: CartModalCleaning
    };
})();